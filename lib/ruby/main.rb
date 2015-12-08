require 'pp'
require 'yaml'
require './lib/util'

class MainGenerator
    def initialize
        @u = Util::RubyPractice.instance
    end

    ARR = [1,2,3]
end

class MainExecute < MainGenerator
    def main
        pp @u.time
        @u.p ARR
        pp @u.sum ARR
    end
end

MainExecute.new.main
