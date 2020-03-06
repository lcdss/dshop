# frozen_string_literal: true

module HasQueryBuilder
  extend ActiveSupport::Concern

  included do
    # TODO: Clean up this code
    def paginate(query)
      page = (pagination_params.dig(:page, :number) || 1).to_i
      perPage = (pagination_params.dig(:page, :size) || 10).to_i
      filter = pagination_params[:filter] || {}
      sort = pagination_params.fetch(:sort, '-id')

      offset = perPage * (page - 1)
      sort_direction = sort.start_with?('-') ? :desc : :asc
      sort_column = sort.start_with?('-') ? sort[1..-1] : sort

      model_class = query.name.constantize

      filter.each do |key, value|
        column_type = model_class.columns_hash[key]&.type

        query = case column_type
                when :string
                  query.where(model_class.arel_table[key].matches("%#{value}%"))
                when :integer
                  query.where(key => value.split(',').map(&:to_i))
                when :datetime
                  query.where(key => value.to_datetime.all_day)
                else
                  query
                end
      end

      total_records = query.count
      total_pages = (total_records.to_f / perPage).ceil

      query = query.limit(perPage).offset(offset).order(sort_column => sort_direction)

      meta = { pagination: { total: total_records, pages: total_pages } }

      [query, meta]
    end

    private

    def pagination_params
      filters = JSON.parse(params[:filter].to_json)&.keys

      params.permit(:sort, page: %i[number size], filter: filters)
    end
  end
end
