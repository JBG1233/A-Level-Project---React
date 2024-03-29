# [Primer - Angular Material Admin template](https://themeforest.net/user/iamnyasha)


### Changelog
***

#### `4.2.0` (2019-09-26)
***

##### Features
* Update to angular-cli v8
* Update to material 2 v8
* Update to angular v8
* Update packages
* Remove angular tree component in favour of material 2 tree component
* Use ng-material-multilevel-menu for sidebar menu


#### Minimum Requirements After Update
* angular-cli v8
* angular v8
* angular material 2 v8
* Node 10+





#### `4.0.0` (2018-05-18)
***

##### Features
* Update to angular-cli v6
* Update to material 2 v6 (Breaking changes)
* Update to angular v6
* Update packages
* Remove angular tree component in favour of material 2 tree component
* Update material 2 demos

#### Minimum Requirements After Update
* angular-cli v6
* angular v6
* angular material 2 v6
* Node 8.9+
* NPM 5.5.1+



#### `3.1.1` (2018-03-22)
***

##### Features
* Update packages
* Update to 5.0.0-beta.13 ( removes deprecated fxLayoutWrap - Breaking change )





#### `3.1.0` (2018-01-24)
***

##### Fixes
* ie issue with sub menus being hidden some of the time

##### Features
* Splits admin-layout into seperate core components  (Breaking change)
  - header
  - sidebar
  - notification sidenav
  - menu
* Remove the shared module  (Breaking change)
* Remove the layouts folder  (Breaking change)
* Update material2 demos
* Use ngx-loading-bar component and remove pace plugin
* Update to angular-cli 1.6.5
* Update to material2 v5.1.0





#### `3.0.0` (2017-11-18)
***

##### Fixes
* perfect-scrollbar issues on mobile
* Remove /deep/ combinator
* Mail and Chat page RTL layout issue fix

##### Features
* Use ngx-perfect-scrollbar component
* Use ngx-leaflet component
* Update to angular-cli 1.5
* Update to material2 v5.0.0-rc0
* Update to angular 5 (Breaking change)

#### Minimum Requirements After Update
* angular-cli v1.5
* angular 5
* angular material 2 v5.0.0-rc0





#### `2.6.0` (2017-10-10)
***

##### Fixes
* Fix ie11 errors
* Fix ngx-quill runtime error


##### Features
* Update to angular-cli 1.4.x
* Add ngx-quill editor
* Update to material2 beta 12 (Breaking change)
* Remove deprecated md- prefixes (Breaking change)





#### `2.5.0` (2017-08-18)
***

##### Fixes
* Fix ngx-datatables icon issue
* Fix ng build issue


##### Features
* Update to angular-cli 1.3.x
* Add ngx-quill editor
* Remove deprecated MaterialModule (Breaking change)
* Update ngx-translate http-loader (Breaking change)




#### `2.4.0` (2017-07-19)
***

##### Fixes
* Fix scroll issue on route changes
* Fix layout height issue for mobile landscape sizes
* Fix searchbar height issue for mobile landscape sizes
* Fix mail page extra scrollbar issue
* Fix lint errors


##### Features
* Update to material 2 beta.8
* Update to angular-cli 1.2.1
* Add table component to demo




#### `2.3.0` (2017-06-28)
***

##### Fixes
* Fix menu issue on tab press
* Resize ecommerce pages image
* Update material component demos
* Chat page scrollbar overflow fix
* Fix router events timing issue
* Fix table-filter search value


##### Features
* Update ng2-translate to latest ngx-translate
* Update to angular-cli 1.1.3
* Add taskboard pages
* Add expansion component to demo
* Use expansion component for mail page
* Migrate to material 2 typography





#### `2.2.0` (2017-06-01)
***

##### Fixes
* fix ngx-datatable paging issue
* fix sidenav submenu max-height croping issue


##### Features
* Add ecommerce pages
* Update to angular material 2 beta 6





#### `2.1.1` (2017-05-19)
***

##### Fixes
* fix perfect-scrollbar issue
* move entry components from app.module.ts


##### Misc
* update google maps component (breaking change)
* update to angular material 2 beta 5
* Add material 2 datepicker demo




#### `2.1.0` (2017-05-11)
***

##### Fixes
* fix md-select padding and margin issues
* accordion state change on route change
* fix map redraw issue for google maps  demo page
* fix chat page toolbar alignment issue


##### Misc
* update google maps component (breaking change)
* update to angular-cli 1.0.3


#### Minimum Requirements After Update
* angular-cli v1.0.3





#### `2.0.0` (2017-04-10)
***

##### Fixes
* datatable vertical scroll height
* datatable fullscreen width
* Auth layout z-index issue
* Minor angular 4 fixes
* css theming imports fix (angular material 2 beta.3)
* perfect-scrollbar layout fix (angular material 2 beta.3)

##### Features
* Update to angular-cli v1
* Update to angular 4
* Update to angular material 2 beta.3
* Add chips demo


##### Misc
* change deprecated <template> to <ng-template>
* change deprecated <md-progress-circle> to <md-progress-spinner>


#### Minimum Requirements After Update
* angular-cli v1
* angular 4
* angular material 2 beta.3




#### `1.5.0` (2017-03-19)
***

##### Fixes
* general RTL bug fixes
* fixes card-actions margins

##### Features
* Add collapse menu layout
* Add compact menu layout
* Add pricing tables



#### `1.4.0` (2017-03-01)
***

##### Fixes
* md-select font sizing and padding [commit log](https://github.com/iamnyasha/primer/commit/93e42cdc74786da9d254fd771ae7d118e6ddc697)
* fix vertical scrollbars on some pages [commit log](https://github.com/iamnyasha/primer/commit/38734631d7f008a1c53e24e9a81a2d3eb887b40a)

##### Breaking Changes
* Upgrade to angular-cli RC0 [commit log](https://github.com/iamnyasha/primer/commit/9ad7700d209aa81324ee1b0f097a7c276bbc7aee)
* refactor template specific .md-* classes to .mat-* [commit log](https://github.com/iamnyasha/primer/commit/77e8f6f3bf0cc00c624a8ab10c978dffae3b9d1f)




#### `1.3.0` (2017-02-19)
***

##### Features
* Added angular 2 material autocomplete example
* Template now passes ng lint test


##### Breaking Changes
* Update to angular-cli 1.0.0.beta-32.3 (see official changelog, comes with a lot of scss changes)
* Update to angular 2 material beta.2 (see official changelog)
* Update to angular-calendar 0.7.2 (see calendar example files for all the changes made)
* Refactored accordion directives to use attributes instead of css selectors. Files affected are admin/admin-layout.component.html and apps/mail/mail.component.html .
  * .accordion changed to appAccordion
  * .accordion-toggle changed to appAccordionToggle
  * .accordion-link changed to appAccordionLink

##### Misc
* Refactored all *.ts and *.html files so that `ng lint` passes (also makes a lot of changes to .ts files)
* Fix errors thrown on ng test
* Updated all other packages in package.json to their latest versions


##### Updating
This update contains a number of breaking changes. The best way to update is to check your files against the commit log and make the necessary changes on your project files. If you don't have github access then get in touch via the themeforest profile page. Also refer to [angular-cli changelog](https://github.com/angular/angular-cli/blob/master/CHANGELOG.md) and [angular 2 material changelog](https://github.com/angular/material2/blob/master/CHANGELOG.md) for further information.

#### Minimum Requirements After Update
* angular-cli 1.0.0.beta-32
* node 6.9+


#### `1.2.0` (2017-02-09)
***

##### Features
* Add boxed layout
* Add custom scrollbars using perfect-scollbar plugin

##### Misc
* Update packages in package.json



#### `1.1.3` (2017-01-20)
***

##### Bug Fixes
* Fix android browser compatibility issue [package.json, polyfills.ts]

##### Misc
* Update package.json

##### Updating
Update your package.json and src/polyfills.ts files with the one from the update and then update your npm packages.


#### `1.1.2` (2017-01-17)
***

##### Bug Fixes
* Fix some color issues in dark mode [scss]
* Fix sidebar scrolling padding issue [scss]
* Fix timeline page RTL layout [scss]

##### Misc
* Update package.json

##### Updating
Only scss changes in this update so you can go ahead and replace your assets/scss/ folder with the updated one.



#### `1.1.1` (2017-01-09)
***

##### Bug Fixes
* Fix spacing bug in scss [scss]
* Fix header spacing alignment [scss]

##### Misc
* Update package.json

##### Updating
Only scss changes in this update so you can go ahead and replace your assets/scss/ folder with the updated one.


#### `1.1.0` (2017-01-03)
***

##### Bug Fixes
* Responsive layout fixes for fullcalendar

##### Features
* Added dynamic menu

##### Misc
* Refactor responsive admin layout, calendar page and messages page
* Add menu-items and fullscreen toggle directive to shared module
* Moved admin-layout and auth-layout components to layout folder
* Updated node packages
* Minor code cleanup


#### `1.0` (2017-01-03)
***

Initial release