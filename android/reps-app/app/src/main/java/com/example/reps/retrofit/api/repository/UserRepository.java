package com.example.reps.retrofit.api.repository;

import androidx.annotation.NonNull;
import androidx.lifecycle.LiveData;

import com.example.reps.retrofit.App;
import com.example.reps.retrofit.api.ApiClient;
import com.example.reps.retrofit.api.ApiResponse;
import com.example.reps.retrofit.api.ApiUserService;
import com.example.reps.retrofit.api.model.CredentialRegister;
import com.example.reps.retrofit.api.model.Credentials;
import com.example.reps.retrofit.api.model.Token;
import com.example.reps.retrofit.api.model.User;
import com.example.reps.retrofit.api.model.VerificationCodeModel;
import com.example.reps.retrofit.api.model.UserInformation;

import okhttp3.ResponseBody;


public class UserRepository {

    private final ApiUserService apiService;

    public UserRepository(App app) {
        this.apiService = ApiClient.create(app, ApiUserService.class);
    }

    public LiveData<Resource<Token>> login(Credentials credentials) {
        return new NetworkBoundResource<Token, Token>()
        {
            @NonNull
            @Override
            protected LiveData<ApiResponse<Token>> createCall() {
                return apiService.login(credentials);
            }
        }.asLiveData();
    }

    public LiveData<Resource<ResponseBody>> verifyCode(VerificationCodeModel credentials) {
        return new NetworkBoundResource<ResponseBody, ResponseBody>()
        {
            @NonNull
            @Override
            protected LiveData<ApiResponse<ResponseBody>> createCall() {
                return apiService.verifyCode(credentials);
            }
        }.asLiveData();
    }

    public LiveData<Resource<ResponseBody>> resendCode(VerificationCodeModel credentials) {
        return new NetworkBoundResource<ResponseBody, ResponseBody>()
        {
            @NonNull
            @Override
            protected LiveData<ApiResponse<ResponseBody>> createCall() {
                return apiService.resendCode(credentials);
            }
        }.asLiveData();
    }



    public LiveData<Resource<User>> register(CredentialRegister credentials) {
        return new NetworkBoundResource<User, User>()
        {
            @NonNull
            @Override
            protected LiveData<ApiResponse<User>> createCall() {
                return apiService.register(credentials);
            }
        }.asLiveData();
    }

    public LiveData<Resource<Void>> logout() {
        return new NetworkBoundResource<Void, Void>()
        {
            @NonNull
            @Override
            protected LiveData<ApiResponse<Void>> createCall() {
                return apiService.logout();
            }
        }.asLiveData();
    }

    public LiveData<Resource<User>> getCurrentUser() {
        return new NetworkBoundResource<User, User>()
        {
            @NonNull
            @Override
            protected LiveData<ApiResponse<User>> createCall() {
                return apiService.getCurrentUser();
            }
        }.asLiveData();
    }

    public LiveData<Resource<User>> modify(UserInformation newUserInfo) {
        return new NetworkBoundResource<User, User>()
        {
            @NonNull
            @Override
            protected LiveData<ApiResponse<User>> createCall() {
                return apiService.modifyCurrentUser(newUserInfo);
            }
        }.asLiveData();
    }
}