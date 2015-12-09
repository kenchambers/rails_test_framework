require 'faker'

FactoryGirl.define do
  factory :user do |f|
    f.username {Faker::Internet.user_name}
    f.password {Faker::Internet.password}
    f.email {Faker::Internet.free_email}
  end

end
