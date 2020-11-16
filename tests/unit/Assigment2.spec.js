import { mount } from '@vue/test-utils'
import Assignment2 from './../../src/views/Assignment2';

describe('Assigment 2', () => {
    const wrapper = shallowMount(Assignment2);
    // Inspect the raw component options
    it('has data', () => {
        const launchpad = "5e9e4502f5090995de566f86";
        Assignment2.vm.failedLaunches(launchpad);
        expect(Assignment2.vm.failuresLaunchpad).toBe('function')
    })
  })