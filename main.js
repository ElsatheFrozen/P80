 var names_of_people=[];

function submit()
{
    var Guest_list=document.getElementById("name").value;
    names_of_people.push(Guest_list);
    document.getElementById("names").innerHTML=names_of_people;
}

function Sorting(){
    names_of_people.sort();
    var display_sorted_list=[];
    var length_of_sorted_list=names_of_people.length;

    for(var k=0; k<length_of_sorted_list; k++)
    {
        display_sorted_list.push("<h5>"+names_of_people[k]+"</h5>")
    }

    var remove_commas=display_sorted_list.join(" ");
    document.getElementById("sorted_guest_list").innerHTML=remove_commas;
}

function Show()
{
    var display_guest_list=[];
    var length_of_name_of_people_array=names_of_people.length;

    for(var k=0; k<length_of_name_of_people_array; k++)
    {
        display_guest_list.push("<h5>"+names_of_people[k]+"</h5>");
    }

    var remove_commas=display_guest_list.join(" ");
    document.getElementById("guest_list").innerHTML=remove_commas;
}

function search()
{
    var s=document.getElementById("names").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("searched_name").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}