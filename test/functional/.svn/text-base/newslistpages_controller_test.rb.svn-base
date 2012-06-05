require 'test_helper'

class NewslistpagesControllerTest < ActionController::TestCase
  setup do
    @newslistpage = newslistpages(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:newslistpages)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create newslistpage" do
    assert_difference('Newslistpage.count') do
      post :create, newslistpage: { anounce: @newslistpage.anounce, author: @newslistpage.author, contenturl: @newslistpage.contenturl, dateofnews: @newslistpage.dateofnews, imageurl: @newslistpage.imageurl, pageid: @newslistpage.pageid, title: @newslistpage.title }
    end

    assert_redirected_to newslistpage_path(assigns(:newslistpage))
  end

  test "should show newslistpage" do
    get :show, id: @newslistpage
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @newslistpage
    assert_response :success
  end

  test "should update newslistpage" do
    put :update, id: @newslistpage, newslistpage: { anounce: @newslistpage.anounce, author: @newslistpage.author, contenturl: @newslistpage.contenturl, dateofnews: @newslistpage.dateofnews, imageurl: @newslistpage.imageurl, pageid: @newslistpage.pageid, title: @newslistpage.title }
    assert_redirected_to newslistpage_path(assigns(:newslistpage))
  end

  test "should destroy newslistpage" do
    assert_difference('Newslistpage.count', -1) do
      delete :destroy, id: @newslistpage
    end

    assert_redirected_to newslistpages_path
  end
end
