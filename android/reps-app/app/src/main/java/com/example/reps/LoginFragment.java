package com.example.reps;

import android.content.Intent;
import android.os.Bundle;
import android.text.InputType;
import android.text.method.PasswordTransformationMethod;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.reps.databinding.FragmentLoginBinding;
import com.example.reps.retrofit.App;
import com.example.reps.retrofit.api.model.Credentials;
import com.example.reps.retrofit.api.repository.Status;

import org.jetbrains.annotations.NotNull;

public class LoginFragment extends Fragment {
    private App app;
    public static final String TAG = "LOGIN_FRAG";
    private FragmentLoginBinding binding;
    Button btn_login ;
    TextView usernameField ;
    TextView passwordField;
    ProgressBar progressBar;
    CheckBox showPass  ;

    public LoginFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_login, container, false);
    }

    @Override
    public void onViewCreated(@NonNull @NotNull View view, @Nullable @org.jetbrains.annotations.Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
         btn_login = view.findViewById(R.id.login_button_register);
         usernameField = view.findViewById(R.id.login_input_user);
         passwordField = view.findViewById(R.id.login_input_password);
         progressBar = view.findViewById(R.id.login_progress_bar);
         showPass  = view.findViewById(R.id.checkBoxPasswordLogin);

        app = (App) requireActivity().getApplication();
        if(app == null){
            Log.d(TAG, "onViewCreated: Error app");
        }


        showPass.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onCheckboxClicked(view);
            }
        });




        btn_login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String username = usernameField.getText().toString();
                String password = passwordField.getText().toString();


                Credentials credentials = new Credentials(username,password);
                app.getUserRepository().login(credentials).observe(requireActivity(), r->{
//                    while(r.getStatus() == Status.LOADING);
                        if (r.getStatus() == Status.SUCCESS) {
                            app.getPreferences().setAuthToken(r.getData().getToken());
                            progressBar.setVisibility(View.INVISIBLE);
                            ////////////////////////////////////////////////////////
                            Intent intent = new Intent(getContext(), LogedActivity.class);
                            intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
                            startActivity(intent);
                            getActivity().finish();
                            ///////////////////////////////////////////////////////
                            //Navigation.findNavController(view).navigate(LoginFragmentDirections.actionLoginFragmentToLogedActivity());
                        }else if(r.getStatus() == Status.ERROR){
                            progressBar.setVisibility(View.INVISIBLE);
                            if (r.getError().getDetails().contains("Password does not match")){
                                passwordField.setError(getString(R.string.error_contrasena_incorrecta));
                            }else{
                                usernameField.setError(getString(R.string.error_usuario_incorrecto));
                            }
                        } else {
                            progressBar.setVisibility(View.VISIBLE);
                        }


                });


            }
        });

    }

    public void onCheckboxClicked(View view) {
        // Is the view now checked?
        boolean checked = ((CheckBox) view).isChecked();

        // Check which checkbox was clicked
        switch(view.getId()) {
            case R.id.checkBoxPasswordLogin:
                if (checked){
                    passwordField.setTransformationMethod(null);
                }
            else{
                    passwordField.setTransformationMethod(new PasswordTransformationMethod());

                }
                // Remove the meat
                break;
        }
    }
}
