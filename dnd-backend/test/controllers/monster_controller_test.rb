require "test_helper"

class MonsterControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get monster_index_url
    assert_response :success
  end
end
