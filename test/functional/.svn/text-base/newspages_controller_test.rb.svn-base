require 'test_helper'

class NewspagesControllerTest < ActionController::TestCase
  setup do
    @newspage = newspages(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:newspages)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create newspage" do
    assert_difference('Newspage.count') do
      post :create, newspage: { content: @newspage.content, title: @newspage.title }
    end

    assert_redirected_to newspage_path(assigns(:newspage))
  end

  test "should show newspage" do
    get :show, id: @newspage
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @newspage
    assert_response :success
  end

  test "should update newspage" do
    put :update, id: @newspage, newspage: { content: @newspage.content, title: @newspage.title }
    assert_redirected_to newspage_path(assigns(:newspage))
  end

  test "should destroy newspage" do
    assert_difference('Newspage.count', -1) do
      delete :destroy, id: @newspage
    end

    assert_redirected_to newspages_path
  end
end
