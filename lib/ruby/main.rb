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
        pp BubbleSort.new.sort [54,23,0,3,89,210,20,1,23,567,90]
    end

    def c
        p caller
        self
    end
end

MainExecute.new.util.bubble_sort.c
