require 'pry'

@hostname = 'http://www.smalltabs.com/sort.php?day=Sunday&neighborhood=Wicker%20Park'


@doc = Nokogiri::HTML(open(@hostname))
bars = @doc.css('div.specials > a')
bars.each do |bar|
  args = {}
  specials = []
  
  

  args[:name] = bar.css('h3').text
  address = bar.css('p.meta').text.gsub(/\s{1}@/, ',')
  args[:address] = address + ', Chicago Il, 60622'
  args[:url] = "www.example.com"

  barObj = Bar.new(args)
   todays_specials = bar.css('ul')
   if todays_specials.css('li').count > 1
     
     todays_specials.css('li').each { |special| barObj.specials.build(special: special.text) }
   else
     special = todays_specials.css('li')[0].text
     barObj.specials.build(special: special)
   end
  
  barObj.save
end
