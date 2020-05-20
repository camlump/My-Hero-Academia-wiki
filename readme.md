# This Project Resembles a Wiki page of The Anime TV series My Hero Academia.

https://myherofanpage.herokuapp.com/

## Project Overview

This Project is a MVP(Minimun Viable Product), that was created using Mongodb, Express, Handlebars and Node.js. The focus of this project was to show a working knowledge of Models-Views-Controllers. In this Web application, their are three Models that will define properties of three different types of characters from the show, Students, Heros and Villains. The home page of the application contains links in the navbar and on the three images to each route. each model has their own set of routes(controller) that show a page with all the characters and then a route to a specific characters information page. that navbar is set in the layout(view). so each model can accessed from the links in the navbar.
    The planning process involved wireframing, where a simple design of what each page should look like was made. Also included ERD with the wireframe to show the schema relationships, in this case the schemas were not related and had some different properties. I used trello guide my way through the project by making a todo list for each part of the project I was doing.

   ## Here are my Wireframe Screeenshots

   ![pic1](screenshots/Home.png)
   ![pic2](screenshots/index.png)
   ![pic3](screenshots/Show.png)

   ## Here is my ERD Screenshot
   ![ERD](screenshots/ERD.png)

   ## Stretch Goals

   1. This current verson of the MVP is strictly a desktop app. In the future I would like to make it responsive for smaller 
   screen sizes.
   2. I would  like to add a more schemas that would show that or are distinct and also add schemas, that have relationships. For
   Example locations would be a good schema to start with because each character, like students have a school location.

   3. In addition to addina more complex models to the app, in the future I'm working towards adding permissions so that not just anyone can go in and add and delete information from the database.


## Here is My project board

https://trello.com/b/bEqD0xTc/myhero-api


{
                     this.state.homework.map((homework, i) => {
                         return (
                             
                             <div key={ i }>
                             
                                

                                <Link to={'homework/'+ homework._id }>{ homework.name }</Link>
                                
                                
                            </div>
                            
                        )
                    })
                }


                          {
                     this.state.homework.map((homework, i) => {
                         return (
                             
                             <div key={ i }>
                             
                             <table class="table table-striped table-dark">
  <thead>
    <tr>
      
      <th scope="col">Assigned</th>
      <th scope="col">Name</th>
      <th scope="col">Finish</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <th scope="row">1</th>
      <td>
        <Link to={'homework/'+ homework._id }>{ homework.name }</Link>

      </td>
      <td>
          <button onClick={ this.deletehomework}>Done</button>
      </td>
    </tr>
     
  </tbody>
</table>



      {
                     this.state.homework.map((homework, i) => {
                         return (
                             
                             <div key={ i }>
                             
                             <table class="table table-striped table-dark">
  <thead>
    <tr>
      
      <th scope="col">Assigned</th>
      <th scope="col">Name</th>
      <th scope="col">Finis</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <th scope="row">1</th>
      <td>
        <Link to={'homework/'+ homework._id }>{ homework.name }</Link>

      </td>
      <td>
          <button onClick={ this.deletehomework}>Done</button>
      </td>
    </tr>
     
  </tbody>
</table>
                                
                                
                            </div>
                            
                        )
                    })
                }