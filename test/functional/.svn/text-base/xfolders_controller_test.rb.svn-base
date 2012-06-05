require 'test_helper'

class XfoldersControllerTest < ActionController::TestCase
  setup do
    @xfolder = xfolders(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:xfolders)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create xfolder" do
    assert_difference('Xfolder.count') do
      post :create, xfolder: { description: @xfolder.description, name: @xfolder.name, size: @xfolder.size }
    end

    assert_redirected_to xfolder_path(assigns(:xfolder))
  end

  test "should show xfolder" do
    get :show, id: @xfolder
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @xfolder
    assert_response :success
  end

  test "should update xfolder" do
    put :update, id: @xfolder, xfolder: { description: @xfolder.description, name: @xfolder.name, size: @xfolder.size }
    assert_redirected_to xfolder_path(assigns(:xfolder))
  end

  test "should destroy xfolder" do
    assert_difference('Xfolder.count', -1) do
      delete :destroy, id: @xfolder
    end

    assert_redirected_to xfolders_path
  end
end
