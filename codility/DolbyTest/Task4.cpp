#include <vector>
#include <string>
#include <unordered_map>

int solution(std::vector<std::string> &visits) {
    if (visits.empty()) {
        return 0;
    }
    
    // Map day names to their position in the week (0 = Monday, 6 = Sunday)
    std::unordered_map<std::string, int> dayToIndex = {
        {"Mon", 0}, {"Tue", 1}, {"Wed", 2}, {"Thu", 3},
        {"Fri", 4}, {"Sat", 5}, {"Sun", 6}
    };
    
    int cards = 1; // Start with one card
    int lastDayIndex = dayToIndex[visits[0]]; // Index of the first visit day
    
    // Process each subsequent visit
    for (int i = 1; i < visits.size(); i++) {
        int currentDayIndex = dayToIndex[visits[i]];
        
        // If current day comes before or equal to the last day in the week order,
        // it means we've moved to a new week
        if (currentDayIndex <= lastDayIndex) {
            cards++;
        }
        
        lastDayIndex = currentDayIndex;
    }
    
    return cards;
}
