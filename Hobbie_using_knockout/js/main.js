function ViewModel()
{
    this.hobby = ko.observable(" ");
    this.hobbies = ko.observableArray([]);
    this.hobbyArray = ko.observableArray(['']);

this.addhobby = function() {
               
    if (this.hobby() != "") 
    {
       this.hobbyArray.push(this.hobby());    //insert accepted value in array
       this.hobby("");
    }
 }.bind(this);
}

const viewModel = new ViewModel();
ko.applyBindings(viewModel);