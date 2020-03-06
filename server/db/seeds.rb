# frozen_string_literal: true

ActiveRecord::Base.transaction do
  ProductSource.destroy_all
  BookProduct.destroy_all
  ComputerProduct.destroy_all
  VehicleProduct.destroy_all

  ProductSource.create(
    name: 'Central Book Store',
    description: 'Here you will find Books for all tastes, genres, authors and much more',
    slug: 'central-book-store',
    source_name: BookProduct.name
  )

  ProductSource.create(
    name: "Hank's Garage",
    description: 'The best prices and quality you will find only here',
    slug: 'hanks-garage',
    source_name: VehicleProduct.name
  )

  ProductSource.create(
    name: 'Austin Vehicles',
    description: 'Here you will find the most high tech computers, components and accessories',
    slug: 'austin-computers',
    source_name: ComputerProduct.name
  )

  50.times do
    BookProduct.create(
      isbn: Faker::Code.isbn,
      title: Faker::Book.title,
      description: Faker::Lorem.paragraph(sentence_count: 10),
      author: Faker::Book.author,
      publisher: Faker::Book.publisher,
      genre: Faker::Book.genre
    )

    ComputerProduct.create(
      name: Faker::Lorem.word.capitalize,
      description: Faker::Lorem.paragraph(sentence_count: 10),
      brand: Faker::Device.manufacturer,
      model: Faker::Device.model_name,
      year: Faker::Stripe.year
    )

    VehicleProduct.create(
      make: Faker::Vehicle.make,
      model: Faker::Vehicle.model,
      description: Faker::Lorem.paragraph(sentence_count: 10),
      manufacture: Faker::Vehicle.manufacture,
      year: Faker::Stripe.year
    )
  end
end
