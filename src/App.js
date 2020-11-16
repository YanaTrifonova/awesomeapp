import Pokemon from "./Pokemon"

import './App.css';
import React from "react";

function App() {
    const pokemonData = [
        {
            name: "Charizard",
            weight: "90",
            awesome: true,
            terrifying: false,
            abilities: ["Blaze", "Solar power", "Tough claws", 'Drought']

        },
        {
            name: "Bulbasaur",
            weight: "6.9",
            awesome: true,
            terrifying: false,
            abilities: ["Overgrow", "Chlorophyll"]

        },
        {
            name: "Mewtwo",
            weight: "122",
            awesome: true,
            terrifying: true,
            abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"]

        },
        {
            name: "Mega beedrill",
            weight: "65",
            awesome: false,
            terrifying: true,
            abilities: ["Intimidate", "Unnerve"]

        },
    ]

    return (
        <div className="App">
            <header className="App-header">
                <h1>Pokemon's cards</h1>
                <main>
                    {pokemonData.map((pokemon) => {
                        return <Pokemon name={pokemon.name} weight={pokemon.weight} awesome={pokemon.awesome}
                                        terrifying={pokemon.terrifying} abilities={pokemon.abilities}/>
                    })}
                </main>
            </header>

        </div>
    );
}

export default App;
