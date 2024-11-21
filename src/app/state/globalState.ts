import {makeAutoObservable} from "mobx";

export class GlobalState {
    constructor() {
        makeAutoObservable(this)
    }
}