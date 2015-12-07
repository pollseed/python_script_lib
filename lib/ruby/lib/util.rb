require 'singleton'

module Util
    class RubyPractice
        include Singleton

        def time
            Time.new
        end

        def p vs
            (-> vs{vs.each{|v|puts v}}).call vs
        end

        def sum vs
            a=0;(-> vs{vs.each{|v|a+=v}}).call vs;a
        end
    end
end
