require 'test_helper'

class ExfilensControllerTest < ActionController::TestCase
  setup do
    @exfilen = exfilens(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:exfilens)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create exfilen" do
    assert_difference('Exfilen.count') do
      post :create, exfilen: { filetype: @exfilen.filetype, folderid: @exfilen.folderid, id: @exfilen.id, name: @exfilen.name }
    end

    assert_redirected_to exfilen_path(assigns(:exfilen))
  end

  test "should show exfilen" do
    get :show, id: @exfilen
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @exfilen
    assert_response :success
  end

  test "should update exfilen" do
    put :update, id: @exfilen, exfilen: { filetype: @exfilen.filetype, folderid: @exfilen.folderid, id: @exfilen.id, name: @exfilen.name }
    assert_redirected_to exfilen_path(assigns(:exfilen))
  end

  test "should destroy exfilen" do
    assert_difference('Exfilen.count', -1) do
      delete :destroy, id: @exfilen
    end

    assert_redirected_to exfilens_path
  end
end
