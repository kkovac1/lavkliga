export interface Team {
    id: number;
    team: string;
    image: string;
    position: number;
    game: number;
    win: number;
    draw: number;
    lose: number;
    goalsScored: number;
    goalsConceded: number;
    goalDifference: number;
    pts: number;
}