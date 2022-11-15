//Base URL
const secret = import.meta.env.VITE_KEY;
const key=`?key=${secret}`;

const base_url = "https://api.rawg.io/api/games";

//Getting the month
const getCurrentMonth = () =>{
    const month = new Date().getMonth()+1;
    if (month < 10) return `0${month}`;
    return month;
}

//Getting the day
const getCurrentDay = () =>{
    const day = new Date().getDate();
    if (day < 10) return `0${day}`;
    return day;
}

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth=getCurrentMonth();
const currentDay=getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
//Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${key}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${key}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${key}${newGames}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}/${game_id}${key}`
//GAME ScreenShots
export const gameScreenshotURL = (game_id) => `${base_url}/${game_id}/screenshots${key}`
//Searched game
export const searchGameURL = (game_name) => `${base_url}${key}&search=${game_name}&page_size=9`;