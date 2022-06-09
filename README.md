# shop-project
Welcome to Marvelous Creations!


    VERB 		 | 		  PATH 		 |  	 DESCRIPTION
 ------------ | ------------- | -------------------
 GET | /icecream/ | index of icecream |
 GET | /icecream/new | add new icecream |
 GET | /icecream/:id | delete iceream |
 POST | /icecream:id | update icecream|
 GET | /icecream | add icecream|
 PUT | /icecream/:id/edit | edit icecream |
 DELETE | /icecream/new | delete icecream |

 Project Goals:

 Index Page
Your app should have an index page where

all the products are displayed
the images link to the product's show page
and there should be a link to add a new product.
Show Page
Your show page should display a product with

a link back to the products
a link to edit the product (goes to the edit page)
a delete button that deletes
and the number of items remaining in stock

Example
If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals in jsx).
On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.
The BUY button should also not be rendered if the quantity of the item is zero
New & Edit Page
These views should render forms and submit to the appropriate routes.
 

Redirects
The create route should redirect to the index
The delete route should redirect to the index
The updated route will redirect back to the product's show page.
For the Hungry for more? the BUY button will go to a route that redirects back to the product's show page
Technical Requirements
Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
Must contain all 7 Restful Routes
Must be styled and look like a store
