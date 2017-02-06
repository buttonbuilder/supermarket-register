require 'page-object'
require 'watir-webdriver'
require 'page-object/page_factory'
require 'rspec'
require 'log4r'
require 'yaml'
require 'require_all'

@browser = Watir::Browser.new :Firefox
@browser.window.maximize
@browser.get('http://127.0.0.1:3000')
  
