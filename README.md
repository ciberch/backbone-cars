## Lonestar Ruby Conf 2012

### Intro to Backbone.js Session

- Mike Abernethy
- Tim Tyrrell

In this course, learn how Backbone.js can be used to turn your Rails app into a more modern Single Page Application.
The course will not only introduce you to Backbone, with its MVC structure and Models, Controllers, Views, and Routers,
but will let you see how an experienced JavaScript developer combine all the pieces into a full-fledged application.
He'll also show you more advanced designs with Backbone and mixins to extend Backbone's functionality.
If you're tired of those silly "intro to backbone" courses with their ToDo apps, then this is the course for you.
By the end of this course, you can be considered Intermediate level in Backbone and be ready to build your own app as soon as the course is finished.


### To run

This app shows a list of cars and filters them on the client side.

To cloudify this app I first switched the hardcoded PUSHER credentials with ENV vars

To run this app locally do

``` bash
git clone git@github.com:ciberch/backbone-cars.git

cd backbone-cars

bundle install

rake db:seed

export PUSHER_APP_ID=<app_id>
export PUSHER_KEY=<app_key>
export PUSHER_SECRET=<app_secret>

rails s
```

### Port to Cloud Foundry

- Monica Wilkinson

To push to Cloud Foundry. First edit `manifest.yml` to have your choice app name

``` bash

gem install vmc

rake assets:precompile

vmc push --runtime=ruby19 --nostart

export APP_NAME=<my_app_name>

vmc env-add $APP_NAME PUSHER_APP_ID=<app_id>
vmc env-add $APP_NAME PUSHER_KEY=<app_key>
vmc env-add $APP_NAME PUSHER_SECRET=<app_secret>

vmc start

```

Note if you don't see any data in your app it means the seeds didn't run so do this

``` bash

gem install caldecott

vmc rails-console $APP_NAME


```

Once at the irb shell paste the contents of `db/seeds.rb`