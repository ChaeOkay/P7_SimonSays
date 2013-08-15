get '/' do
  # Look in app/views/index.erb

  erb :index
end

post '/color' do
  random_button
end
