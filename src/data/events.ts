const events = [
	{
		type: "comment",
		createdAt: "2022-08-31T00:20:05.344Z",
		author: "Miss Hugo Altenwerth",
		message: {
			title: "ut ratione accusamus omnis",
			description:
				"Repudiandae quia a cupiditate ut dolor adipisci. Quos officiis qui non ab a hic impedit aspernatur. Sapiente nisi in labore cupiditate expedita aut nihil quos. Qui consequatur quo temporibus ducimus non consequatur deserunt exercitationem qui. Nisi sequi aspernatur maxime fuga.",
			receiver: "Casey Cummings",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T19:38:50.930Z",
		author: "Nduka Musa",
		message: {
			title: "quae corporis cumque labore",
			description:
				"Voluptatem facere beatae ut facilis voluptas autem et neque. Dicta odit quaerat. Asperiores quis earum. Voluptatem distinctio ratione. Reprehenderit tempore fugiat porro asperiores in ad pariatur.",
			receiver: "Lorena Schowalter",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-31T01:48:55.930Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T15:13:38.313Z",
		author: "Nduka Musa",
		message: {
			title: "nostrum dolores magnam omnis",
			description:
				"Ipsam id aut temporibus. Et rerum qui velit deserunt ut soluta quis minus quia. Animi rerum facilis ipsum ut. Voluptatem similique nemo consequatur dolorum doloribus quia aut facilis et. Soluta sequi facere excepturi repellendus repellat voluptatem tempora. Commodi corrupti ea ipsum aperiam vero quidem.",
			receiver: "Nicolas Upton",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T23:12:34.417Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T18:49:44.305Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T12:13:02.000Z",
		author: "Ms. Joyce Hamill",
		message: {
			title: "quas voluptas rerum ab",
			description:
				"Aut a corrupti quia. Repudiandae ut tempore unde harum. Quod odit provident numquam blanditiis optio est commodi. Et reprehenderit recusandae officiis eos.",
			receiver: "Bruce Bartell",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T19:41:34.710Z",
		author: "Dr. Angel Reichert",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T23:08:19.093Z",
		author: "Gerard Koepp DDS",
		message: {
			title: "dolorem iusto iure voluptate",
			description:
				"Deleniti quidem praesentium sed. Eius est laboriosam dolorem rerum sed pariatur quia. Ipsam dolorem incidunt quidem maxime in molestiae necessitatibus enim mollitia. Ipsum recusandae ut sunt eligendi ipsa quia. Iure ad unde facere dolores et dicta voluptatem maxime id. Optio repudiandae eveniet et molestiae iure eveniet soluta magni. Expedita voluptates consequatur.",
			receiver: "Joseph Haag II",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-31T05:44:38.102Z",
		author: "Nduka Musa",
		message: {
			title: "laborum modi corrupti ullam",
			description:
				"Nesciunt et fuga dolores officia eum sed. Voluptatibus ab officia. Nesciunt voluptate quis. Inventore enim amet blanditiis ut.",
			receiver: "Ellen Raynor",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-31T07:49:33.035Z",
		author: "Josh Krajcik",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-31T07:42:53.924Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T15:52:11.642Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Completed",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-31T02:08:24.931Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Completed",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T15:23:04.666Z",
		author: "Kari Cassin",
		activity: {
			type: "ChangedStatus",
			status: "Completed",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T15:38:52.709Z",
		author: "Nduka Musa",
		message: {
			title: "sit molestiae qui sed",
			description:
				"Ratione totam id. Culpa voluptas veritatis. Optio enim enim. Unde adipisci aut repellat.",
			receiver: "Sergio Labadie",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T19:41:05.957Z",
		author: "Guillermo Larkin",
		message: {
			title: "architecto deleniti molestiae incidunt",
			description:
				"Praesentium enim est architecto esse et ipsum doloremque magni. Corrupti aliquid et. Quod et odio velit quae id. Omnis tenetur vero numquam occaecati doloremque nisi dolorem molestiae.",
			receiver: "Robin Bins",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T15:07:18.611Z",
		author: "Nduka Musa",
		message: {
			title: "itaque tenetur odit consequatur",
			description:
				"Qui quaerat iusto fuga omnis id. Voluptatem accusamus alias qui et temporibus nisi aut voluptas velit. Ipsa recusandae omnis voluptatem. Rerum ipsam quia maiores consequatur.",
			receiver: "Lynn Johns III",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-31T02:42:19.059Z",
		author: "Stanley Parisian",
		activity: {
			type: "ChangedStatus",
			status: "Completed",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T14:32:08.870Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-31T06:01:11.622Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-31T08:32:34.221Z",
		author: "Jerry Bailey",
		message: {
			title: "voluptatem quae nemo optio",
			description:
				"Quia hic animi voluptatem eius placeat. Nobis atque blanditiis blanditiis. Praesentium sunt quia ut officia et dolor ratione. Praesentium non amet repudiandae distinctio eos ducimus. Aspernatur sed et. Eveniet alias assumenda velit cumque beatae modi.",
			receiver: "Benjamin Schultz",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T13:05:25.574Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T22:45:07.693Z",
		author: "Herbert Kutch",
		message: {
			title: "placeat aut officiis est",
			description:
				"Est ea rerum quos illo est impedit vitae. Deserunt voluptate repellat culpa eum et rerum a ducimus nihil. Ab optio fugit explicabo repellendus. Soluta odit dolor dolor eaque et. Corporis harum rerum velit delectus.",
			receiver: "Crystal Bechtelar",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T13:32:00.154Z",
		author: "Nduka Musa",
		message: {
			title: "rerum nemo commodi cum",
			description:
				"Consequatur qui consequatur. Laudantium fuga cupiditate quos neque voluptates deleniti vel. Harum voluptas blanditiis dolorum hic quae quidem esse consequuntur rerum. Dolor inventore amet occaecati quidem amet ad ipsa. Numquam quae autem est id provident similique officiis odit qui. Cum quo nobis sapiente repellendus facere est cupiditate.",
			receiver: "Vera Anderson",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T18:14:57.605Z",
		author: "Todd Murphy II",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-31T03:18:28.262Z",
		author: "Josephine Streich",
		activity: {
			type: "ChangedStatus",
			status: "Completed",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-31T10:02:16.777Z",
		author: "Jamie Wehner",
		activity: {
			type: "ChangedStatus",
			status: "Completed",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T17:17:13.827Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Pending",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-30T19:16:41.125Z",
		author: "Nduka Musa",
		message: {
			title: "quam eligendi sunt magnam",
			description:
				"Expedita dolores ratione rerum eius alias quidem ut. Et ex aliquam ullam nostrum. Consequatur atque placeat consequatur. Quia voluptates quisquam quis. Quibusdam excepturi et modi rerum itaque. Ad rerum voluptatem. Rerum accusamus ullam quae ipsam quam aliquam.",
			receiver: "Alexandra Mayer",
		},
	},
	{
		type: "activity",
		createdAt: "2022-08-30T22:53:36.536Z",
		author: "Nduka Musa",
		activity: {
			type: "ChangedStatus",
			status: "Completed",
		},
	},
	{
		type: "comment",
		createdAt: "2022-08-31T09:30:04.485Z",
		author: "Gerald Mayer",
		message: {
			title: "sint dignissimos suscipit quos",
			description:
				"Dicta eaque minima quis laudantium quasi. Qui id error laborum. Sed qui reiciendis ut laboriosam dolorum voluptas commodi velit corrupti. Velit provident a. Nobis eum consequatur delectus. Modi magni laborum voluptatem ut sequi eius aperiam quis dolores. Sunt id architecto voluptate ut laudantium.",
			receiver: "Dorothy Schmidt",
		},
	},
];

export default events;
