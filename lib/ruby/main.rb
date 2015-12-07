require './lib/util'

class MainExecute
    ARR = [1,2,3]

    attr_accessor :u

    def initialize
        @u = Util::RubyPractice.instance
    end

    def main
        p @u.time
        @u.p ARR
        p @u.sum ARR
    end
end

MainExecute.new.main
