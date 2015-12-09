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
    def create_test_arr _
        test = []
        (_).times{|_|test[_]=fizzbuzz_sim _}
        test
    end

    def fizzbuzz_sim _
        r=->a,b,c{(rand(1..1000)*10*a*b-b) <<c}
        if _%15==0 then r.call 15,_,3
        elsif _%3==0 then r.call 3,_,10
        elsif _%5==0 then r.call 5,_,7
        else r.call 1,_,2
        end
    end
end

MainExecute.new.util.bubble_sort.c
