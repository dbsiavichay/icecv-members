-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "first_name" VARCHAR(128) NOT NULL,
    "last_name" VARCHAR(128) NOT NULL,
    "birthdate" DATE NOT NULL,
    "birthplace" JSONB NOT NULL,
    "occupation" VARCHAR(128) NOT NULL,
    "civil_state" VARCHAR(64) NOT NULL,
    "marriage_date" DATE,
    "spouse_name" VARCHAR(128),
    "conversion_date" DATE NOT NULL,
    "baptism_date" DATE,
    "ecclesiastical_data" JSONB NOT NULL,
    "contact_data" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "childrens" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255),
    "birthdate" DATE,
    "member_id" INTEGER NOT NULL,

    CONSTRAINT "childrens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "childrens" ADD CONSTRAINT "childrens_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
