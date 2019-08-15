module Jekyll
  module TooltipFilter
    def tooltip(input, ttip)
      "<a href=\"\#\" title=\"#{ttip}\" data-toggle=\"tooltip\" style=\"cursor:default\" class=\"text-info\" onclick=\"return false\">#{input}</a>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::TooltipFilter)
