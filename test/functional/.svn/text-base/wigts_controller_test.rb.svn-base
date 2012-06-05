require 'test_helper'

class WigtsControllerTest < ActionController::TestCase
  setup do
    @wigt = wigts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:wigts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create wigt" do
    assert_difference('Wigt.count') do
      post :create, wigt: { content: @wigt.content, id: @wigt.id, title: @wigt.title }
    end

    assert_redirected_to wigt_path(assigns(:wigt))
  end

  test "should show wigt" do
    get :show, id: @wigt
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @wigt
    assert_response :success
  end

  test "should update wigt" do
    put :update, id: @wigt, wigt: { content: @wigt.content, id: @wigt.id, title: @wigt.title }
    assert_redirected_to wigt_path(assigns(:wigt))
  end

  test "should destroy wigt" do
    assert_difference('Wigt.count', -1) do
      delete :destroy, id: @wigt
    end

    assert_redirected_to wigts_path
  end
end
