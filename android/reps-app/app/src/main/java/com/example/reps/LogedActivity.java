package com.example.reps;

import android.app.PendingIntent;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.Window;
import android.view.WindowManager;

import androidx.appcompat.app.AppCompatActivity;
import androidx.navigation.NavController;
import androidx.navigation.NavDeepLinkBuilder;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.example.reps.databinding.ActivityLogedBinding;
import com.example.reps.retrofit.AppPreferences;
import com.google.android.material.bottomnavigation.BottomNavigationView;

public class LogedActivity extends AppCompatActivity {

    private ActivityLogedBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ///// Para que no se vea el titel bar

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        getSupportActionBar().hide();

        binding = ActivityLogedBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        BottomNavigationView navView = findViewById(R.id.nav_view);
        // Passing each menu ID as a set of Ids because each
        // menu should be considered as top level destinations.
        AppBarConfiguration appBarConfiguration = new AppBarConfiguration.Builder(
                R.id.navigation_home, R.id.navigation_descubrir, R.id.navigation_favoritos, R.id.navigation_perfil)
                .build();
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_activity_loged);
        NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);
        NavigationUI.setupWithNavController(binding.navView, navController);

        AppPreferences appPreferences = new AppPreferences(this);
        Log.d("LOGGED_ACTIVITY", "onCreate: " + appPreferences.getSharedRutID());
        if (appPreferences.getSharedRutID() != -1){
            Integer urlRoutineID = appPreferences.getSharedRutID();
            appPreferences.setSharedRutID(-1);
            Bundle bundle = new Bundle();
            bundle.putInt("ID_rutina", urlRoutineID);
            bundle.putBoolean("isFav",false);
            navController.navigate(R.id.vista_rutina, bundle);
        }


    }
}