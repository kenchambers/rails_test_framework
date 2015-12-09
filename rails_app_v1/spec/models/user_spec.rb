require 'rails_helper'

RSpec.describe User, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"

  describe User do
    it "has a valid factory" do
      create(:user).should be_valid
    end
    it "is invalid without a username"
    it "is invalid without a password"
    it "is invalid without an email"
    it "returns a mew User object"
  end

end
