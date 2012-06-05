require 'test_helper'

class XfilesControllerTest < ActionController::TestCase
  setup do
    @xfile = xfiles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:xfiles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create xfile" do
    assert_difference('Xfile.count') do
      post :create, xfile: { Description: @xfile.Description, Name: @xfile.Name, Size: @xfile.Size, Way: @xfile.Way }
    end

    assert_redirected_to xfile_path(assigns(:xfile))
  end

  test "should show xfile" do
    get :show, id: @xfile
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @xfile
    assert_response :success
  end

  test "should update xfile" do
    put :update, id: @xfile, xfile: { Description: @xfile.Description, Name: @xfile.Name, Size: @xfile.Size, Way: @xfile.Way }
    assert_redirected_to xfile_path(assigns(:xfile))
  end

  test "should destroy xfile" do
    assert_difference('Xfile.count', -1) do
      delete :destroy, id: @xfile
    end

    assert_redirected_to xfiles_path
  end
end
