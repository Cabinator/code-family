angular.module("sportsStore").
constant("productListActiveClass", "btn-primary").
constant("productListPageCount", 5).
controller("sportsStoreCtrl", function ($scope, $filter, productListActiveClass, productListPageCount) {
    $scope.data = {
        products: [
            {name: "Product #1", description: "A product", category: "Category #1", price: "99"},
            {name: "Product #2", description: "A product", category: "Category #2", price: "199"},
            {name: "Product #3", description: "A product", category: "Category #3", price: "999"},
            {name: "Product #1", description: "A product", category: "Category #1", price: "99"},
            {name: "Product #2", description: "A product", category: "Category #2", price: "199"},
            {name: "Product #3", description: "A product", category: "Category #3", price: "999"},
            {name: "Product #1", description: "A product", category: "Category #1", price: "99"},
            {name: "Product #2", description: "A product", category: "Category #2", price: "199"},
            {name: "Product #3", description: "A product", category: "Category #3", price: "999"},
            {name: "Product #1", description: "A product", category: "Category #1", price: "99"},
            {name: "Product #2", description: "A product", category: "Category #2", price: "199"},
            {name: "Product #3", description: "A product", category: "Category #3", price: "999"},
            {name: "Product #1", description: "A product", category: "Category #1", price: "99"},
            {name: "Product #2", description: "A product", category: "Category #2", price: "199"},
            {name: "Product #3", description: "A product", category: "Category #3", price: "999"}
        ]
    };

    var selectedCategory = null;
    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
    }

    $scope.categoryFilterFn = function (product) {
        return selectedCategory == null || product.category == selectedCategory;
    }

    $scope.getCategoryClass = function (category) {
        return selectedCategory == category ? productListActiveClass : ""
    }

    $scope.selectPage = function (newPage) {
        $scope.selectedPage = newPage;
    }

    $scope.getPageClass = function (page) {
        return $scope.selectedPage == page ? productListActiveClass : "";
    }

});