require 'pp'
require 'yaml'
require './lib/util'
require './lib/sort'

class MainGenerator
    def initialize
        @u = Util::RubyPractice.instance
    end

    ARR = [1,2,3]
end

class MainExecute < MainGenerator
    def util
        pp @u.time
        @u.p ARR
        pp @u.sum ARR
        self
    end

    def bubble_sort
        pp BubbleSort.new.sort create_test_arr 100
        self
    end

    def c
        p caller
        self
    end

    private
    def create_test_arr l
        test = []
        (l).times{|v|test[v]=fizzbuzz v}
        test
    end

    def fizzbuzz v
        r = ->a,b,c{(rand(1..1000)*10*a*b-b) <<c}
        if v % 15 == 0 then r.call 15,v,3
        elsif v % 3 == 0 then r.call 3,v,10
        elsif v % 5 == 0 then r.call 5,v,7
        else r.call 1,v,2
        end
    end
end

MainExecute.new.util.bubble_sort.c
