require 'test_helper'

class ExfoldsControllerTest < ActionController::TestCase
  setup do
    @exfold = exfolds(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:exfolds)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create exfold" do
    assert_difference('Exfold.count') do
      post :create, exfold: { id: @exfold.id, name: @exfold.name, parent_id: @exfold.parent_id, path: @exfold.path }
    end

    assert_redirected_to exfold_path(assigns(:exfold))
  end

  test "should show exfold" do
    get :show, id: @exfold
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @exfold
    assert_response :success
  end

  test "should update exfold" do
    put :update, id: @exfold, exfold: { id: @exfold.id, name: @exfold.name, parent_id: @exfold.parent_id, path: @exfold.path }
    assert_redirected_to exfold_path(assigns(:exfold))
  end

  test "should destroy exfold" do
    assert_difference('Exfold.count', -1) do
      delete :destroy, id: @exfold
    end

    assert_redirected_to exfolds_path
  end
end
