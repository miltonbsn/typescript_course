class FoodGroup {
    private _name: string;

    //TODO: Create a get and set block for the member variable above.
    get name(): string{
      return this._name;
    }

    set name(newName: string){
      this._name = newName;
    }

}
