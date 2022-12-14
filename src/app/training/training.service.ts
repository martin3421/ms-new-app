import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";

export class TrainingService {
    exerciseChange = new Subject<Exercise>;
    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ]

    private runningExercise: Exercise;

    getAvailableExercises(){
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string){
        const selctedExercise = this.availableExercises.find(ex=> ex.id === selectedId)
        this.runningExercise = selctedExercise;
        this.exerciseChange.next({...this.runningExercise})
    }

    getRunningExercise(){
        return {...this.runningExercise};
    }
}