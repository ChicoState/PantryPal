import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import image from './Images/italy.jpg';

const preCodedMeals = [
    { name: 'Spaghetti Bolognese', calories: 500, ingredients: ['Spaghetti', 'Bolognese sauce', 'Ground beef'] },
    { name: 'Caesar Salad', calories: 300, ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons'] },
    { name: 'Grilled Chicken', calories: 400, ingredients: ['Chicken breast', 'Olive oil', 'Seasonings'] },
    { name: 'Margherita Pizza', calories: 600, ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese'] },
    { name: 'Chicken Alfredo', calories: 700, ingredients: ['Fettuccine pasta', 'Chicken', 'Alfredo sauce'] },
    { name: 'Vegetable Stir-Fry', calories: 350, ingredients: ['Mixed vegetables', 'Soy sauce', 'Cooking oil'] },
    { name: 'Hamburger', calories: 550, ingredients: ['Ground beef patty', 'Burger bun', 'Lettuce, tomato, and condiments'] },
    { name: 'Salmon Fillet', calories: 450, ingredients: ['Salmon fillet', 'Lemon', 'Herbs'] },
    { name: 'Shrimp Scampi', calories: 380, ingredients: ['Shrimp', 'Garlic', 'Butter'] },
    { name: 'Vegetarian Burrito', calories: 420, ingredients: ['Flour tortilla', 'Black beans', 'Guacamole'] },
    { name: 'Sushi Roll (California)', calories: 320, ingredients: ['Rice', 'Avocado', 'Crab or imitation crab'] },
    { name: 'Pasta Primavera', calories: 380, ingredients: ['Pasta', 'Assorted vegetables', 'Creamy sauce'] },
    { name: 'Chicken Teriyaki', calories: 480, ingredients: ['Chicken thighs', 'Teriyaki sauce', 'Sesame seeds'] },
    { name: 'Greek Salad', calories: 250, ingredients: ['Cucumbers', 'Tomatoes', 'Feta cheese'] },
    { name: 'Beef Tacos', calories: 400, ingredients: ['Ground beef', 'Taco shells', 'Lettuce, cheese, and salsa'] },
    { name: 'Cesar Wrap', calories: 320, ingredients: ['Grilled chicken', 'Romaine lettuce', 'Caesar dressing'] },
    { name: 'BBQ Ribs', calories: 800, ingredients: ['Pork ribs', 'BBQ sauce', 'Seasonings'] },
    { name: 'Eggplant Parmesan', calories: 450, ingredients: ['Eggplant', 'Tomato sauce', 'Parmesan cheese'] },
    { name: 'Tofu Stir-Fry', calories: 300, ingredients: ['Tofu', 'Vegetables', 'Soy sauce'] },
    { name: 'Cheeseburger', calories: 600, ingredients: ['Beef patty', 'Cheese', 'Burger bun'] },
    // Add more meals as needed
];

const MealScreen = ({ navigation }) => {
    const [meal, setMeal] = useState('');
    const [mealsList, setMealsList] = useState([]);

    const handleAddMeal = () => {
        if (meal.trim() !== '') {
            setMealsList([...mealsList, meal]);
            setMeal('');
        }
    };

    const handleRemoveMeal = (index) => {
        const updatedMealsList = [...mealsList];
        updatedMealsList.splice(index, 1);
        setMealsList(updatedMealsList);
    };

    const getMealDetails = (mealName) => {
        const matchedMeal = preCodedMeals.find((m) => m.name.toLowerCase() === mealName.toLowerCase());

        if (matchedMeal) {
            return `${mealName} - ${getCaloriesForMeal(mealName)} calories\nIngredients: ${matchedMeal.ingredients.join(', ')}`;
        } else {
            return `${mealName} - Meal details not available`;
        }
    };


    const getCaloriesForMeal = (mealName) => {
        const matchedMeal = preCodedMeals.find((m) => m.name.toLowerCase() === mealName.toLowerCase());
        return matchedMeal ? matchedMeal.calories : 'Calories not available';
    };

    return (
        <ImageBackground
            source={image}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
                <TextInput
                    placeholder="Enter a Meal"
                    value={meal}
                    onChangeText={(text) => setMeal(text)}
                    style={{ borderWidth: 1, borderColor: 'gray', width: 200, padding: 8, marginBottom: 5, backgroundColor: 'white' }}
                />
                <TouchableOpacity onPress={handleAddMeal}>
                    <View style={{ backgroundColor: 'teal', padding: 10, borderRadius: 5 }}>
                        <Text style={{ color: 'white' }}>Add Meal</Text>
                    </View>
                </TouchableOpacity>
                <FlatList
                    data={mealsList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', padding: 10, marginVertical: 5, marginHorizontal: 10, borderRadius: 5 }}>
                            <Text>{getMealDetails(item)}</Text>
                            <TouchableOpacity onPress={() => handleRemoveMeal(index)}>
                                <Text style={{ color: 'red' }}>X</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />

            </View>
        </ImageBackground>
    );
};

export default MealScreen;