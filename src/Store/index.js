import { observable , action } from 'mobx'

class Store {
    @observable num = true;

    @action.bound adds(){
        this.num += 1;
    }
}

export default new Store();