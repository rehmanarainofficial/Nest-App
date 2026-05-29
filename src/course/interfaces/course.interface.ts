export enum CourseLevel {
    BEGINNER = 'beginner',
    INTERMEDIATE = 'intermediate',
    ADVANCED = 'advanced'
}

export const COURSE_DURATIONS = [1, 2, 3, 4, 5, 6] as const;

export enum CourseDuration {
    ONE_MONTH = 1,
    TWO_MONTHS = 2,
    THREE_MONTHS = 3,
    FOUR_MONTHS = 4,
    FIVE_MONTHS = 5,
    SIX_MONTHS = 6
}