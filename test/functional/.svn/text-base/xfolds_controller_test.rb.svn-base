require 'test_helper'

class XfoldsControllerTest < ActionController::TestCase
  setup do
    @xfold = xfolds(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:xfolds)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create xfold" do
    assert_difference('Xfold.count') do
      post :create, xfold: { id: @xfold.id, name: @xfold.name, parentid: @xfold.parentid }
    end

    assert_redirected_to xfold_path(assigns(:xfold))
  end

  test "should show xfold" do
    get :show, id: @xfold
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @xfold
    assert_response :success
  end

  test "should update xfold" do
    put :update, id: @xfold, xfold: { id: @xfold.id, name: @xfold.name, parentid: @xfold.parentid }
    assert_redirected_to xfold_path(assigns(:xfold))
  end

  test "should destroy xfold" do
    assert_difference('Xfold.count', -1) do
      delete :destroy, id: @xfold
    end

    assert_redirected_to xfolds_path
  end
end
