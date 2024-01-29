
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { SearchGymsUseCase } from "./search-gyms";

let gymsRepository: InMemoryGymsRepository;
let sut: SearchGymsUseCase;

describe("Search Gyms Use Case", () => {
	beforeEach(() => {
		gymsRepository = new InMemoryGymsRepository();
		sut = new SearchGymsUseCase(gymsRepository);
	});



	it("should be able to search for gyms", async () => {
		await gymsRepository.create({
			title: "Js gym",
			description: null,
			phone: null,
			latitude: -27.2092052,
			longitude: -49.6401091,
		});
		await gymsRepository.create({
			title: "Ts gym",	
			description: null,
			phone: null,
			latitude: -27.2092052,
			longitude: -49.6401091,
		});

		const { gyms } = await sut.execute({
			query: "Ts",
			page: 1
		});

		expect(gyms).toHaveLength(1);
		expect(gyms).toEqual([
			expect.objectContaining({
				title : "Ts gym" 
			}),
		]);
	});

	it("should be able to fetch paginated gyms search", async () => {
		for(let i = 1; i <= 22; i++){
			await gymsRepository.create({
				title: `Ts gym ${i}`,	
				description: null,
				phone: null,
				latitude: -27.2092052,
				longitude: -49.6401091,
			});
		}

		const { gyms } = await sut.execute({
			query: "Ts",
			page: 2
		});


		expect(gyms).toHaveLength(2);
		expect(gyms).toEqual([
			expect.objectContaining({
				title : "Ts gym 21"
			}),
			expect.objectContaining({
				title : "Ts gym 22" 
			})
		]);
	});
});