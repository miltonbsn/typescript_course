var BaseRecipeCategory = (function () {
    function BaseRecipeCategory() {
        this._foodGroups = [];
    }
    Object.defineProperty(BaseRecipeCategory.prototype, "name", {
        //TODO: Create get and set blocks for each of the variables in the declaration above.
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRecipeCategory.prototype, "foodGroups", {
        get: function () {
            return this._foodGroups;
        },
        set: function (newFoodGroup) {
            this._foodGroups = newFoodGroup;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRecipeCategory;
})();

//# sourceMappingURL=baseRecipeCategory.js.map