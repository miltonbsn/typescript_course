class BaseRecipeCategory
{
    private _name: string;
    private _foodGroups: FoodGroup[] = [];

    //TODO: Create get and set blocks for each of the variables in the declaration above.
    get name(): string{
      return this._name;
    }

    set name(newName: string){
      this._name = newName;
    }

    get foodGroups(): FoodGroup[]{
      return this._foodGroups;
    }

    set foodGroups(newFoodGroup: FoodGroup[]){
      this._foodGroups = newFoodGroup;
    }


}
