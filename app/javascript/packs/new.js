
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require("stylesheets/devise/sessions/new.scss")
Rails.start()
Turbolinks.start()
ActiveStorage.start()
