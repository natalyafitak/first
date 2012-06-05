require 'test_helper'

class PagesviewsControllerTest < ActionController::TestCase
  setup do
    @pagesview = pagesviews(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pagesviews)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pagesview" do
    assert_difference('Pagesview.count') do
      post :create, pagesview: { author: @pagesview.author, content: @pagesview.content, createdate: @pagesview.createdate, id: @pagesview.id, module_id: @pagesview.module_id, name: @pagesview.name, parent_id: @pagesview.parent_id, status: @pagesview.status, title: @pagesview.title }
    end

    assert_redirected_to pagesview_path(assigns(:pagesview))
  end

  test "should show pagesview" do
    get :show, id: @pagesview
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pagesview
    assert_response :success
  end

  test "should update pagesview" do
    put :update, id: @pagesview, pagesview: { author: @pagesview.author, content: @pagesview.content, createdate: @pagesview.createdate, id: @pagesview.id, module_id: @pagesview.module_id, name: @pagesview.name, parent_id: @pagesview.parent_id, status: @pagesview.status, title: @pagesview.title }
    assert_redirected_to pagesview_path(assigns(:pagesview))
  end

  test "should destroy pagesview" do
    assert_difference('Pagesview.count', -1) do
      delete :destroy, id: @pagesview
    end

    assert_redirected_to pagesviews_path
  end
end
