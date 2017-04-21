var mytodoApp=angular.module('mytodoApp',[]);

mytodoApp.controller('mytodoController',['$scope',function($scope){
	$scope.appTitle = "Umesh's Awesome ToDo App";
	$scope.appHeadline = "Let's start save";
	$scope.todos = [];
	$scope.addTo=function(){
		$scope.todos.push({
			text:$scope.todoText,
			done:false
		});
		$scope.todoText = ''; 
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};
	$scope.remaining=function(){
		var count=0;
		angular.forEach($scope.todos,function(todo){
			count+=todo.done? 0 : 1;
		});
		return count;
	};
	$scope.archive=function(){
		var oldTodos = $scope.todos;	
		$scope.todos=[];
		angular.forEach(oldTodos,function(todo){
		if(!todo.done){
			$scope.todos.push(todo);
		}			
		});
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};
	$scope.deleteTask=function(index){
		$scope.todos.splice(index,1);
	}

	$scope.completedTask=function(){
		var oldTodos=$scope.todos;
		$scope.completetodo=[];
		angular.forEach(oldTodos,function(todo){
		if(todo.done){
			$scope.completetodo.push(todo);
		}
	});
		var myEi=angular.element(document.querySelector(".unstyled"));
		myEi.addClass("hide-todo").removeClass("show-todo");
		var myEu=angular.element(document.querySelector(".completetodo"));
		myEu.addClass("show-todo").removeClass("hide-todo");
		var myEn=angular.element(document.querySelector(".todo-form"));
		myEn.addClass("hide-todo").removeClass("show-todo");

	}

	$scope.allTask=function(){
		var myEi=angular.element(document.querySelector(".unstyled"));
		myEi.addClass("show-todo").removeClass("hide-todo");
		var myEu=angular.element(document.querySelector(".completetodo"));
		myEu.addClass("hide-todo").removeClass("show-todo");
		var myEn=angular.element(document.querySelector(".todo-form"));
		myEn.addClass("show-todo").removeClass("hide-todo");	
	}
}]);