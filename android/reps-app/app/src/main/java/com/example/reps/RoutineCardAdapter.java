package com.example.reps;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.RatingBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.lifecycle.LifecycleOwner;
import androidx.navigation.Navigation;
import androidx.recyclerview.widget.RecyclerView;

import com.example.reps.retrofit.App;
import com.example.reps.retrofit.api.repository.Status;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class RoutineCardAdapter extends RecyclerView.Adapter<RoutineCardAdapter.ViewHolder> {

    public List<RoutineCard> routines;
    protected LayoutInflater mInflater;
    private Context context;
    // almacna el estado original y no cambia en toda la busqueda
    private List<RoutineCard> originalRoutines;
    private App app;
    private Activity activity;

    public RoutineCardAdapter(List<RoutineCard> routines, Context context, App app, Activity activity) {
        this.routines = routines;
        this.mInflater = LayoutInflater.from(context);
        this.context = context;
        this.app = app;
        this.activity = activity;
        originalRoutines = new ArrayList<>();
        originalRoutines.addAll(routines);
    }

    @NonNull
    @NotNull
    @Override
    public RoutineCardAdapter.ViewHolder onCreateViewHolder(@NonNull @NotNull ViewGroup parent, int viewType) {
        View view = mInflater.inflate(R.layout.routine_card, null, false);
        return new RoutineCardAdapter.ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull @NotNull RoutineCardAdapter.ViewHolder holder, int position) {
        holder.bindData(routines.get(position));
        Log.d("ROUTINE_CARD_ADAPTER", "onBindViewHolder: " + routines.get(position).getId() + " " + routines.get(position).isFavourite());
    }

    @Override
    public int getItemCount() {
        return routines.size();
    }

    public void filter(String strSearch) {
        if (strSearch.length() == 0) {
            routines.clear();
            routines.addAll(originalRoutines);
        } else {
            List<RoutineCard> searched = routines.stream().filter(r -> r.getName().toLowerCase().contains(strSearch))
                    .collect(Collectors.toList());
            routines.clear();
            routines.addAll(searched);
        }
        notifyDataSetChanged();
    }

    public void setRoutines(List<RoutineCard> rut) {
        routines = rut;
    }

    public void auxNotify(int position){

    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView name, owner, description;
        RatingBar ratingBar;
        ImageButton favButton;

        public ViewHolder(@NonNull @NotNull View itemView) {
            super(itemView);
            name = itemView.findViewById(R.id.rutine_card_title);
            owner = itemView.findViewById(R.id.rutine_card_user);
            description = itemView.findViewById(R.id.descripcionRut);
            ratingBar = itemView.findViewById(R.id.rutine_card_rating);
            favButton = itemView.findViewById(R.id.vista_rutina_fav_button);
            itemView.setOnClickListener(view -> {
                int position = getAdapterPosition();
                View parent = (View) itemView.getParentForAccessibility().getParentForAccessibility();
                Log.d("COMPARACION", "ID parent " + parent.getId() + " ID fragment" + R.id.fragment_home);

                Bundle bundle = new Bundle();
                bundle.putInt("ID_rutina",routines.get(position).getId());
                bundle.putBoolean("isFav",routines.get(position).isFavourite());
                Navigation.findNavController(view).navigate(R.id.vista_rutina, bundle);


            });

            itemView.findViewById(R.id.vista_rutina_fav_button).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    int position = getAdapterPosition();
                    int routineID = routines.get(position).getId();

                    if(app == null){
                        Log.d("ROUTINE_CARD_ADAPTER", "onClick: Error app");
                    }

                    if (!routines.get(position).isFavourite()){
                        app.getFavouriteRepository().addFavourite(routineID).observe((LifecycleOwner) activity, r ->{
                            if (r.getStatus() == Status.SUCCESS) {
                                routines.get(position).setFavourite(true);
                                ((ImageButton) itemView.findViewById(R.id.vista_rutina_fav_button))
                                        .setImageResource(R.drawable.baseline_favorite_black_24dp_pressed);
                                //Toast.makeText(view.getContext(), "Rutina \"" + routines.get(position).getName() + "\" agregada a favoritos", Toast.LENGTH_LONG).show();
                                Toast.makeText(view.getContext(), activity.getString(R.string.string_rutina_quote) + routines.get(position).getName() + activity.getString(R.string.string_quote_agregada_a_favoritos), Toast.LENGTH_LONG).show();
                            }else{

                            }
                        });
                    }else{
                        app.getFavouriteRepository().deleteFavourite(routineID).observe((LifecycleOwner) activity, r ->{
                            if (r.getStatus() == Status.SUCCESS) {
                                routines.get(position).setFavourite(false);
                                ((ImageButton) itemView.findViewById(R.id.vista_rutina_fav_button))
                                        .setImageResource(R.drawable.baseline_favorite_black_24dp);
                                //Toast.makeText(view.getContext(), "Rutina \"" + routines.get(position).getName() + "\" eliminada de favoritos", Toast.LENGTH_LONG).show();
                                Toast.makeText(view.getContext(), activity.getString(R.string.string_rutina_quote) + routines.get(position).getName() + activity.getString(R.string.string_quote_borrada_de_favoritos), Toast.LENGTH_LONG).show();
                                auxNotify(position);
                            }else{

                            }
                        });
                    }

                }
            });

            itemView.findViewById(R.id.rutine_card_share).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    int position = getAdapterPosition();
                    int routineID = routines.get(position).getId();
                    ClipboardManager clipboard = (ClipboardManager) context.getSystemService(Context.CLIPBOARD_SERVICE);
                    Uri myUri = Uri.parse("https://www.reps.com/routines/" + routineID); // cambiar al link de la rutina
                    ClipData clip = ClipData.newRawUri("Rutine Link", myUri);
                    clipboard.setPrimaryClip(clip);

                    Intent intent = new Intent(Intent.ACTION_SEND);
                    intent.setType("text/plain");
                    intent.putExtra(Intent.EXTRA_TEXT, myUri.toString());
                    context.startActivity(Intent.createChooser(intent, activity.getString(R.string.string_compartir_rutina) + " \"" +routines.get(position).getName() + "\""));
                }
            });
        }

        void bindData(final RoutineCard item) {
            if (item.isFavourite()){
                Log.d("ROUTINE_CARD_ADAPTER", "rut id fav: " + item.getId());
                favButton.setImageResource(R.drawable.baseline_favorite_black_24dp_pressed);
            }else{
                favButton.setImageResource(R.drawable.baseline_favorite_black_24dp);
            }
            name.setText(item.getName());
            owner.setText(item.getOwner());
            description.setText(item.getDescription());
            ratingBar.setRating(item.getRating());
        }

    }
}
