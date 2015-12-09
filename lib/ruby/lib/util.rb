require 'singleton'

module Util
    class RubyPractice
        include Singleton

        def time
            Time.new
        end

        def p _
            # 書き方がいくつかある
            #(->_{_.map{|_|puts _}}).call _
            #_.map &method(:puts)
            _.map &:puts.to_proc.curry(2).call(Kernel)
        end

        def sum _
            a=0;(->_{_.map{|_|a+=_}}).call _;a
        end
    end
end
